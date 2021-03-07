import React, { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';
import Compressor from 'compressorjs';
import PicIcon from 'components/Icons/PicIcon';
import TrashIcon from 'components/Icons/TrashIcon';
import dashImage from './images/dashed.png';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
    width: '100%',
    height: '100%',
    minHeight: 180,
    '&:focus': {
      outline: 'none'
    },
  },
  commonBorder: {
    border: `1px solid ${theme.palette.secondary.contrastText}`,
  },

  dashBorder: {
    borderStyle: 'dashed',
    borderImage: `url("${dashImage}") 2.4 round`,
  },
  placeholder: {
    marginTop: theme.spacing(1.5),
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    objectFit: 'cover'
  },
  clearButton: {
    cursor: 'pointer',
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    width: theme.spacing(2),
    height: theme.spacing(2),
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
}));

const Dropzone = ({ image, setImage, imageURL }) => {
  const classes = useStyles();
  const [imageSrc, setImageSrc] = useState();

  const onClear = event => {
    event.stopPropagation();
    setImageSrc(null);
    setImage(null);
  }

  useEffect(() => {
    setImageSrc(imageURL);
  }, [imageURL]);

  const onDrop = useCallback(async (acceptedFiles) => {
    if (!Array.isArray(acceptedFiles) || acceptedFiles.length <= 0) return;
    const file = acceptedFiles[0];

    const compressorPromise = new Promise(function (resolve, reject) {
      new Compressor(file, {
        quality: 0.7,
        convertSize: 500000,
        maxWidth: 2000,
        maxHeight: 2000,
        success(newFile) {
          resolve(newFile);
        },
        error(err) {
          resolve(file);
        }
      });
    });

    let compressedFile = acceptedFiles[0];
    try {
      compressedFile = await compressorPromise;
    } catch (err) {
      console.log(err);
    }

    // TODO: CHECK BASE 64 vs Blob vs File ======
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImage(reader.result);
    }
    );
    reader.readAsDataURL(compressedFile);

    // TODO: BLOB ================================
    // setImage(URL.createObjectURL(compressedFile));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const accept = ".jpg, .png, .jpeg";

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept })

  return (
    <>
      <div {...getRootProps()}
        className={clsx(classes.root, (!imageSrc && !image) && classes.dashBorder, (image || imageSrc) && classes.commonBorder)}>
        <input {...getInputProps()} />
        {(!image && !imageSrc) &&
          <>
            <PicIcon />
            <Typography variant='body2' color='textSecondary' className={classes.placeholder}>
              Drag and Drop <br /> Thumbnail image here
            </Typography>
          </>
        }
        {(image || imageSrc) &&
          <>
            <img className={classes.image}
              src={image || imageSrc}
              alt='dropzone' />
            <TrashIcon
              color='white'
              className={classes.clearButton}
              onClick={onClear} />
          </>
        }
      </div>

    </>
  )
}

export default Dropzone;
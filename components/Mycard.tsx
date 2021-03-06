import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  media: {
    padding: '4px',
  },
}));

const MyCard = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader />
        <CardMedia
          src={'/IMG_2434.JPG'}
          component="img"
          className={classes.media}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default MyCard;

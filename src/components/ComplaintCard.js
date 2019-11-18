import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import HelpIcon from '@material-ui/icons/Help';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import Badge from '@material-ui/core/Badge';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SplitButton from './SplitButton';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%'
  },
  media: { height: 0, paddingTop: '56.25%' },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg0)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  badge: {
    marginTop: '15px'
  }
}));

const iconByMedium = medium => {
  const mediumIconMap = {
    facebook: <FacebookIcon />,
    twitter: <TwitterIcon />
  };
  return mediumIconMap[medium.toLowerCase()] || <HelpIcon />;
};

export default function ComplaintViewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {iconByMedium(props.medium)}
          </Avatar>
        }
        action={
          <IconButton arial-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.medium}
        subheader={props.mode}
      ></CardHeader>
      <CardContent>
        <Typography variant="body3" color="textSecondary" component="p">
          {props.complaintText}
        </Typography>
        <Badge badgeContent={12} color="primary" className={classes.badge}>
          <ViewHeadlineIcon />
        </Badge>
      </CardContent>
      <CardActions>
        <IconButton>
          <NotInterestedIcon />
        </IconButton>
        <IconButton>
          <EmojiEmotionsIcon />
        </IconButton>
        <IconButton>
          <SentimentDissatisfiedIcon />
        </IconButton>
        <IconButton>
          <SentimentVeryDissatisfiedIcon />
        </IconButton>
        <SplitButton />
      </CardActions>
    </Card>
  );
}

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
        avatar={<Avatar className={classes.avatar}>{props.agent}</Avatar>}
        action={
          <IconButton arial-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <IconButton arial-label="settings">
            {iconByMedium(props.medium)}
          </IconButton>
        }
      ></CardHeader>
      <CardContent>
        <Typography variant="body2">{props.complaintText}</Typography>
      </CardContent>
    </Card>
  );
}

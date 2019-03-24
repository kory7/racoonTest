import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 350
  },
  popup: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  popWindow: {
    position: "absolute",
    zIndex: 99,
    left: "40%",
    right: "40%",
    top: "20%"
  }
};
class Pop extends Component {
  controlPop = () => {
    this.props.closePop(true);
  };
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.popup}>
        <Card className={classes.popWindow}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={this.props.img}
              title={this.props.desc}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={this.controlPop}
            >
              Cerrar
            </Button>
            <Button variant="contained" color="secondary" size="small">
              Justo así
            </Button>
          </CardActions>
        </Card>
      </Paper>
    );
  }
}
export default withStyles(styles)(Pop);

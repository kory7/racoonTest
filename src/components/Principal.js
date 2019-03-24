import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  space: {
    marginRight: 30
  }
});
class Principal extends Component {
  changePop = () => {
    let selectId = this.props.id;
    this.props.pop(true, selectId);
  };
  render() {
    const { classes } = this.props;
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.desc}</TableCell>
        <TableCell>
          <Button
            variant="outlined"
            color="primary"
            className={classes.space}
            onClick={this.changePop}
          >
            Detalle
          </Button>
          <Button variant="outlined" color="secondary">
            Elegir
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}
export default withStyles(styles)(Principal);

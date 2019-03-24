import React, { Component } from "react";
import "./App.css";
import Principal from "./components/Principal";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Pop from "./components/Pop";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class App extends Component {
  state = {
    raccoon: "",
    popup: false,
    id: ""
  };

  turnPop = (pop, id) => {
    if (pop) {
      this.setState({
        popup: !this.state.popup,
        id: id
      });
    }
  };

  closePop = pop => {
    if (pop) {
      this.setState({
        popup: !this.state.popup
      });
    }
  };
  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ raccoon: res.feelings });
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("http://159.89.143.117:3001/raccoon/feelings");
    const body = await response.json();
    return body;
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className="title">
          ¿En la escala del raccoon cómo te sientes hoy?
        </h1>
        <Paper>
          <Table className={classes.root}>
            <TableHead className={classes.table}>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Me siento ...</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.raccoon ? (
                this.state.raccoon.map(c => {
                  return (
                    <Principal
                      key={c.id}
                      id={c.id}
                      desc={c.desc}
                      imgUrl={c.imgUrl}
                      pop={this.turnPop}
                    />
                  );
                })
              ) : (
                <TableRow>
                  <TableCell>"Cargando"</TableCell>
                  <TableCell>"Cargando"</TableCell>
                  <TableCell>"Cargando"</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
        {this.state.popup ? (
          <Pop
            img={this.state.raccoon[this.state.id - 1].imgUrl}
            desc={this.state.raccoon[this.state.id - 1].desc}
            closePop={this.closePop}
          />
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(App);

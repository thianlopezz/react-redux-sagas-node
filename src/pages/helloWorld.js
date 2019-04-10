import React from "react";
import { connect } from "react-redux";

import HelloWorld from "../components/helloWorld/helloWorld";

class helloWorldPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getHello();
    this.props.getHellos();
  }

  render() {
    const { hellos, hello } = this.props;
    return (
      <section>
        <HelloWorld hellos={hellos} hello={hello} />
      </section>
    );
  }
}

const mapStateToProps = ({ helloState }) => {
  const { hello, hellos } = helloState;
  return {
    hello,
    hellos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHellos: () => dispatch({ type: "LOAD_HELLO_WORLD" }),
    getHello: () => dispatch({ type: "LOAD_HELLO_WORLD_ID" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(helloWorldPage);

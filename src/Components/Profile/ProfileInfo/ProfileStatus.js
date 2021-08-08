import React from "react";
import styles from "./ProfileStatus.module.css";
// import Preloader from "../../../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  state = {
    editing: false,
    value: this.props.status,
  };
  toggleEditing = (value) => {
    this.setState({
      editing: value,
    });
  };
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  render() {
    return (
      <div
        className={styles.profileStatus}
        onDoubleClick={() => {
          this.toggleEditing(true);
        }}
      >
        {!this.state.editing ? (
          <h2>{this.props.status ? this.props.status : "My status"}</h2>
        ) : (
          <input
            type="text"
            autoFocus={true}
            onBlur={() => {
              this.props.updateStatus(this.state.value);
              this.toggleEditing(false);
            }}
            value={this.state.value ? this.state.value : "My status"}
            onChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;

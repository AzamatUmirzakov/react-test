import React, { useEffect, useState } from "react";
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

const ProfileStatusWithHooks = (props) => {
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <div
      className={styles.profileStatus}
      onDoubleClick={() => {
        setEditing(true);
      }}
    >
      {!editing ? (
        <h2>{props.status ? props.status : "My status"}</h2>
      ) : (
        <input
          type="text"
          autoFocus={true}
          onBlur={() => {
            props.updateStatus(status);
            setEditing(false);
          }}
          value={status ? status : "My status"}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;

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
    error: null,
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
            onBlur={async () => {
              const response = await this.props.updateStatus(this.state.value);
              if (response.resultCode === 0) {
                this.toggleEditing(false);
              }
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
  const [error, setError] = useState(null);
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
        <>
          {error}
          <input
            type="text"
            autoFocus={true}
            onBlur={async () => {
              const response = await props.updateStatus(status);
              debugger;
              if (response.resultCode === 0) {
                setEditing(false);
                setError(null);
              } else {
                setError(response.messages[0]);
              }
            }}
            value={status}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;

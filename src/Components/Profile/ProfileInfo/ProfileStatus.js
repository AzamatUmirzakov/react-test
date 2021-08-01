import React from "react";
// import Preloader from "../../../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
  state = {
    editing: false,
  };
  toggleEditing = (value) => {
    this.setState({
      editing: value,
    });
  };
  handleChange = (event) => {};
  render() {
    return (
      <div>
        <div
          onDoubleClick={() => {
            this.toggleEditing(true);
          }}
        >
          {!this.state.editing ? (
            <h2>{this.props.status}</h2>
          ) : (
            <input
              type="text"
              autoFocus={true}
              onBlur={() => {
                this.toggleEditing(false);
              }}
              value={this.props.status}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;

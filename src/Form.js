import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isFirstNameEmpty: false,
      date: "",
      isDateEmpty: "",
      Starttime: "",
      isStartTimeEmpty: "",
      endtime: "",
      isEndTimeEmpty: "",
      isFormValid: false
    };
    this.Change = this.onFirstNameChange.bind(this);
    this.updateFormStatus = this.updateFormStatus.bind(this);
    this.updateFormState = this.updateFormState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }
  updateFormState(key, val) {
    this.setState({
      [key]: val
    });
  }

  updateFormStatus(formStatus) {
    this.setState({
      isFormValid: formStatus
    });
  }
  onSubmit() {
    console.log("Submitted");
    console.log(this.state);
    fetch("https://mainproject-1b464.firebaseio.com/application.json", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...this.state
      })
    }).then(rsp => console.log(rsp));
  }
  reset() {
    this.setState({
      name: "",
      isFirstNameEmpty: false,
      date: "",
      isDateEmpty: "",
      Starttime: "",
      isStartTimeEmpty: "",
      endtime: "",
      isEndTimeEmpty: "",
      isFormValid: false
    });
  }

  onFirstNameChange(event) {
    const name = event.target.value;
    if (name === "") {
      this.updateFormStatus(false);
      this.setState({
        isFirstNameEmpty: true
      });
    } else {
      this.updateFormStatus(true);
      this.setState({
        isFirstNameEmpty: false
      });
    }
  }
  onNameChange(nameType, fieldName, event) {
    const name = event.target.value;
    if (name === "") {
      this.updateFormStatus(false);
      this.setState({
        [nameType]: true
      });
    } else {
      this.updateFormStatus(true);
      this.setState({
        [nameType]: false
      });
    }
    this.updateFormState(fieldName, name);
  }
  onlyAlpha(e) {
    var name = document.getElementById("name");
    if (e.shiftKey || e.ctrlKey || e.altKey) {
      e.preventDefault();
    } else {
      var key = e.keyCode;
      if (
        !(
          key === 8 ||
          key === 32 ||
          key === 46 ||
          (key >= 35 && key <= 40) ||
          (key >= 65 && key <= 90)
        )
      ) {
        e.preventDefault();
      }
    }
  }
  // validate = () => {
  //   // const errors = {};
  //   if (this.state.name === "") {
  //     this.setState({
  //       firstNameError: true
  //     });

  //     //errors.firstNameError = "enter name";
  //   }
  //   // if (isError) {
  //   //   this.setState({
  //   //     ...this.state,
  //   //     ...errors
  //   //   });
  //   // }
  // };
  // onSubmit = e => {
  //   // e.preventDefault();
  //   //this.props.onChange(this.state);

  //   console.log("Submitted");
  //   console.log(this.state);
  // };
  onDateChange(nameType, fieldName, event) {
    const date = event.target.value;
    if (date === "") {
      this.updateFormStatus(false);
      this.setState({
        [nameType]: true
      });
    } else {
      this.updateFormStatus(true);
      this.setState({
        [nameType]: false
      });
    }
    this.updateFormState(fieldName, date);
  }
  onTimeChange(nameType, fieldName, event) {
    const time = event.target.value;
    if (time === "") {
      this.updateFormStatus(false);
      this.setState({
        [nameType]: true
      });
    } else {
      this.updateFormStatus(true);
      this.setState({
        [nameType]: false
      });
    }
    this.updateFormState(fieldName, time);
  }

  render() {
    return (
      <div class="container">
        <div class="row main">
          <div class="main-login main-center">
            <h3>Drive Registration.</h3>
            <form class="" method="post" action="#">
              <div class="form-group">
                <label for="name" class="cols-sm-2 control-label">
                  Your Name
                </label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Enter your Name"
                      onChange={this.onNameChange.bind(
                        this,
                        "isFirstNameEmpty",
                        "name"
                      )}
                      onKeyDown={this.onlyAlpha.bind(this)}
                    />
                    <div>
                      {this.state.isFirstNameEmpty && (
                        <span id="firstNameError" class="alert alert-danger">
                          Please enter first name
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="date" class="cols-sm-2 control-label">
                  Date
                </label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-calendar fa" aria-hidden="true" />
                    </span>
                    <input
                      type="date"
                      class="form-control datepicker"
                      name="date"
                      id="dt"
                      data-date-format="mm/dd/yyyy"
                      onChange={this.onDateChange.bind(
                        this,
                        "isDateEmpty",
                        "date"
                      )}
                    />
                    <div>
                      {this.state.isDateEmpty && (
                        <span id="dateError" class="alert alert-danger">
                          Please enter date
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="startTime" class="cols-sm-2 control-label">
                  Start Time
                </label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-clock-o fa" aria-hidden="true" />
                    </span>
                    <input
                      type="time"
                      class="form-control"
                      name="Starttime"
                      id="Starttime"
                      onChange={this.onTimeChange.bind(
                        this,
                        "isStartTimeEmpty",
                        "Starttime"
                      )}
                    />
                    <div>
                      {this.state.isStartTimeEmpty && (
                        <span id="stTimeError" class="alert alert-danger">
                          Please enter start time
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="endTime" class="cols-sm-2 control-label">
                  End Time
                </label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-clock-o fa" aria-hidden="true" />
                    </span>
                    <input
                      type="time"
                      class="form-control"
                      name="endtime"
                      id="endTime"
                      onChange={this.onTimeChange.bind(
                        this,
                        "isEndTimeEmpty",
                        "endtime"
                      )}
                    />
                    <div>
                      {this.state.isEndTimeEmpty && (
                        <span id="endTimeError" class="alert alert-danger">
                          Please enter end time
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="Location" class="cols-sm-2 control-label">
                  Location
                </label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-map-marker fa" aria-hidden="true" />
                    </span>
                    <select
                      id="what"
                      class="form-control selectpicker show-tick"
                      multiple
                    >
                      <option selected>Bangalore</option>
                      <option>Hyderabad</option>
                      <option>Chennai</option>
                      <option>Pune</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="skills" class="cols-sm-2 control-label">
                  Skills
                </label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-book fa" aria-hidden="true" />
                    </span>
                    <select
                      id="what"
                      class="form-control selectpicker show-tick"
                      multiple
                    >
                      <option selected>React</option>
                      <option>Angular</option>
                      <option>JavaScript</option>
                      <option>Bootstrap</option>
                    </select>
                  </div>
                  <button
                    type="reset"
                    value="Reset"
                    id="button"
                    class="btn btn-primary "
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                  <a
                    type="button"
                    id="button"
                    class="btn btn-primary "
                    onClick={this.onSubmit}
                    disabled={!this.state.isFormValid}
                  >
                    Create Event
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;

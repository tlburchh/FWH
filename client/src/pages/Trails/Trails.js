import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import Map from '../../components/Map';
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
class Trails extends Component {
  state = {
    trailsData: [],
  };

  componentDidMount() {
    this.loadTrails();
  }
  //search hiking API
  // searchTrailsData = () => {
  //   API.searchTrails(lat, long)
  //   .then(res => this.setState({trailsData: res.data}))
  //   .catch(err => console.log(err));
  //   console.log("API READ!")
  //   console.log(res.data)
  // };

//load saved trails
  loadTrails = () => {
    API.getTrails()
      .then(res =>
        this.setState({ trailsData: res.data })
      )
      .catch(err => console.log(err));
  };
//delete saved trails
  deleteTrail = id => {
    API.deleteTrail(id)
      .then(res => this.loadTrails())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveTrail({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadTrails())
        .catch(err => console.log(err));
    }
  };

  render() {
    console.log("state");
    console.log(this.state);
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="trail"
                placeholder="Search"
              />
              {/* <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          
            {/* <Map></Map> */}
          
          

           </Col>
           <Col size="md-6 sm-12">
             <Jumbotron>
               <h1>Weather</h1>
             </Jumbotron>
               )} */}
                <WeatherCard />
             </Col>
          </Row>
         </Container>
       );
     }
    }

export default Trails;

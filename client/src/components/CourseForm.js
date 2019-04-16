import React, { useState, useEffect, } from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";

const CourseForm = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [schedule, setSchedule] = useState("");
  const [cost, setCost] = useState("");
  const [location, setLocation] = useState("");
  const [season, setSeason] = useState("");
  const [cohorts, setCohorts] = useState([]);

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  }
  const handleSeasonChange = (e) => {
    setSeason(e.target.value);
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  }
  const handleScheduleChange = (e) => {
    setSchedule(e.target.value);
  }
  const handleCostChange = (e) => {
    setCost(e.target.value);
  }
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  useEffect( () => {
    axios.get(`/api/cohorts/`)
      .then( res => setCohorts(res.data) )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/cohorts", { imageUrl, season, description, startDate, schedule, cost, location, })
      .then( res => {
      })
  }

return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="ImageUrl"
            placeholder="ImageUrl"
            name="imageUrl"
            required
            onChange={handleImageUrlChange}
            value={imageUrl}
          />
          <Form.Input
            label="Season"
            placeholder="Season"
            name="season"
            required
            onChange={handleSeasonChange}
            value={season}
          />
          <Form.Input
            label="Description"
            placeholder="Description"
            name="description"
            required
            onChange={handleDescriptionChange}
            value={description}
          />
          <Form.Input
            label="StartDate"
            placeholder="StartDate"
            name="startDate"
            required
            onChange={handleStartDateChange}
            value={startDate}
          />
          <Form.Input
            label="Schedule"
            placeholder="Schedule"
            name="schedule"
            required
            onChange={handleScheduleChange}
            value={schedule}
          />
          <Form.Input
            label="Cost"
            placeholder="Cost"
            name="cost"
            required
            onChange={handleCostChange}
            value={cost}
          />
          <Form.Input
            label="Location"
            placeholder="Location"
            name="location"
            required
            onChange={handleLocationChange}
            value={location}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </>
  )
}

export default CourseForm;
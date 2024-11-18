"use client"
import React, { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  Rating,
} from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import dayjs from "dayjs"

const CreateUser = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    gender: "",
    dateOfBirth: "",
    contactMethod: [],
    maritalStatus: "",
    newsletterSubscription: null,
    rating: null,
  })

  // Refs for checkboxes
  const smsRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const newsletterRef = useRef()
  const ratingRef = useRef()

  const handleSubmit = event => {
    event.preventDefault()
    const formElements = event.target.elements

    const submittedData = {
      firstName: formElements.firstName.value,
      lastName: formElements.lastName.value,
      email: formElements.email.value,
      occupation: formElements.occupation.value,
      gender: formElements.gender.value,
      dateOfBirth: dayjs(formElements.dateOfBirth.value).format("DD/MM/YYYY"),
      contactMethod: [],
      maritalStatus: formElements.maritalStatus.value,
      newsletterSubscription: newsletterRef.current.checked,
      rating: Number(formElements.rating.value),
    }

    if (smsRef.current.checked) submittedData.contactMethod.push("SMS")
    if (emailRef.current.checked) submittedData.contactMethod.push("Email")
    if (phoneRef.current.checked) submittedData.contactMethod.push("Phone")

    setFormData(submittedData)
    // router.push("/dashboard")
  }

  // useEffect for debugging
  React.useEffect(() => {
    console.log("Updated formData state:", formData)
    // console.log(formData.dateOfBirth)
  }, [formData])

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 800,
        mx: "auto",
        p: 2,
      }}
    >
      <Typography
        className="flex items-center justify-center"
        component="h1"
        variant="h6"
      >
        Create new user form
      </Typography>

      {/*First row*/}
      <div className="flex items-center justify-between gap-4">
        <TextField
          name="firstName"
          label="First Name"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />

        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />

        <TextField
          name="email"
          label="Email Address"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
      </div>

      {/*Second row*/}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <TextField
            name="occupation"
            label="Occupation"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </div>

        {/*Gender dropdown*/}
        <div className="flex-1">
          <FormControl fullWidth margin="normal">
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              name="gender"
              labelId="gender-select-label"
              id="gender-select"
              label="Gender"
              variant="outlined"
              defaultValue=""
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/*Date picker*/}
        <div className="flex-1">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              name="dateOfBirth"
              label="Birth Date"
              fullWidth
              sx={{
                width: "100%",
                mt: 2,
                mb: 1,
              }}
              slotProps={{
                textField: {
                  name: "dateOfBirth",
                  required: true,
                },
              }}
            />
          </LocalizationProvider>
        </div>
      </div>

      {/*Third row*/}
      <div className="flex items-center justify-between gap-4">
        {/*Check box*/}
        <div>
          <FormGroup>
            <FormLabel component="legend">Contact Method</FormLabel>
            <FormControlLabel
              control={<Checkbox inputRef={smsRef} />}
              label="SMS"
            />
            <FormControlLabel
              control={<Checkbox inputRef={emailRef} />}
              label="Email"
            />
            <FormControlLabel
              control={<Checkbox inputRef={phoneRef} />}
              label="Phone"
            />
          </FormGroup>
        </div>

        {/*Radio buttons*/}
        <FormControl>
          <FormLabel>Marital status</FormLabel>
          <RadioGroup defaultValue="Single" name="maritalStatus">
            <FormControlLabel
              value="single"
              control={<Radio />}
              label="Single"
            />
            <FormControlLabel
              value="married"
              control={<Radio />}
              label="Married"
            />
            <FormControlLabel
              value="divorced"
              control={<Radio />}
              label="Divorced"
            />
          </RadioGroup>
        </FormControl>

        <div className="flex flex-col items-center justify-between gap-4">
          {/*Rating*/}
          <div className="flex flex-col items-cente">
            <FormLabel>Rate your experience</FormLabel>
            <Rating name="rating" defaultValue={0} precision={1} size="large" />
          </div>

          {/*Toggle switch*/}
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  inputRef={newsletterRef}
                  name="newsletterSubscription"
                />
              }
              label="Subscribe to newsletter"
              labelPlacement="top"
              sx={{
                "& .MuiFormControlLabel-label": {
                  color: "grey.700", // You can adjust the shade of grey as needed
                },
              }}
            />
          </FormGroup>
        </div>
      </div>

      <Button type="submit" fullWidth variant="contained" color="primary">
        Create user
      </Button>
    </Box>
  )
}

export default CreateUser

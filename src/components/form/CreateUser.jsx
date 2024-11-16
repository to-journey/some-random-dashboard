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
    maritalStatus: "",
    contactMethod: [],
  })

  // Refs for checkboxes
  const smsRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()

  const handleSubmit = event => {
    event.preventDefault()
    const formElements = event.target.elements

    const submittedData = {
      firstName: formElements.firstName.value,
      lastName: formElements.lastName.value,
      email: formElements.email.value,
      occupation: formElements.occupation.value,
      gender: formElements.gender.value,
      dateOfBirth: dayjs(formElements.dateOfBirth.value),
      contactMethod: [],
    }

    // Check the state of each checkbox and add to contactMethod if checked
    if (smsRef.current.checked) submittedData.contactMethod.push("SMS")
    if (emailRef.current.checked) submittedData.contactMethod.push("Email")
    if (phoneRef.current.checked) submittedData.contactMethod.push("Phone")

    setFormData(submittedData)
    // console.log("Form submitted:", submittedData)
    // router.push("/dashboard")
  }

  // Keep useEffect for debugging purposes
  React.useEffect(() => {
    console.log("Updated formData state:", formData)
    console.log(formData.contactMethod)
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
              control={<Checkbox inputRef={smsRef} />} // Use ref for SMS checkbox
              label="SMS"
            />
            <FormControlLabel
              control={<Checkbox inputRef={emailRef} />} // Use ref for Email checkbox
              label="Email"
            />
            <FormControlLabel
              control={<Checkbox inputRef={phoneRef} />} // Use ref for Phone checkbox
              label="Phone"
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

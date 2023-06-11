import { useEffect, useState } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  DatePicker,
  Radio,
} from "antd";
import { GetData, AddUser } from "../Services/User.service";
import DisplayData from "./Display";

const RegisterForm = () => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const [dob, setDob] = useState()
    const [sub, setSub] = useState(false)
    const [formData, setFormData] = useState(false)

    // useEffect(
    //    () => { 
    //      GetAllMongoData()
    //    }, []
    //  )

     const GetAllMongoData = async () => {
      const data = await GetData()
      console.log("Dats ==>>", data)
    }
  
    const API_BASE = "http://localhost:8080";

    const onFinish = async (values) => {
      console.log("Received values of form: ", values);
      values.dob = dob
      const response = await AddUser(values)
      console.log(response)
      if(response?._id ) { 
        setSub(true)
        setFormData(response) 
      } 
    };

    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
  
const countries = ['Country 1', 'Country 2', 'Country 3'];
const states = {
  'Country 1': ['State 1', 'State 2', 'State 3'],
  'Country 2': ['State 4', 'State 5', 'State 6'],
  'Country 3': ['State 7', 'State 8', 'State 9'],
};
const cities = {
  'State 1': ['City 1', 'City 2', 'City 3'],
  'State 2': ['City 4', 'City 5', 'City 6'],
  'State 3': ['City 7', 'City 8', 'City 9'],
  'State 4': ['City 10', 'City 11', 'City 12'],
  'State 5': ['City 13', 'City 14', 'City 15'],
  'State 6': ['City 16', 'City 17', 'City 18'],
  'State 7': ['City 19', 'City 20', 'City 21'],
  'State 8': ['City 22', 'City 23', 'City 24'],
  'State 9': ['City 25', 'City 26', 'City 27'],
};

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
  
    const handleCountryChange = (value) => {
      setSelectedCountry(value);
      setSelectedState('');
      setSelectedCity('');
    };
  
    const handleStateChange = (value) => {
      setSelectedState(value);
      setSelectedCity('');
    };
  
    const handleCityChange = (value) => {
      setSelectedCity(value);
    };

    const handleDataChange = async (date, dateString) => {
      const formData = await form.getFieldsValue();
      console.log("formData", { formData });
      const currDate = new Date()
      const age = currDate.getFullYear() - date.$d.getFullYear()
      console.log("Age", age)
      setDob(date.$d)
      form.setFieldsValue({
        age: age,
      })
    }

    const validateAge = (_, value) => {
      const age = parseInt(value, 10);
  
      if (isNaN(age) || age <= 14) {
        return Promise.reject(new Error('Please enter an age greater than 14.'));
      }
  
      return Promise.resolve();
    };

    return (
        <>
        { !sub && <>
          <div>
          <h2 style={{textAlign:'center'}}>Registration Form</h2>
        </div>
        <div style={{
        //   display:'flex',
        //   justifyContent:'center',
        }}>
        <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >

        <Form.Item
            name="firstName"
            label="First Name"
            rules={[
                {
                required: true,
                message: "Please input your first name!",
                whitespace: true,
                },
                {
                  message: "Please input your valid first name!",
                  pattern: /^[A-Za-z]+$/
                }
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
                {
                required: true,
                message: "Please input your last name!",
                whitespace: true,
                pattern: /^[A-Za-z]+$/
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="country"
          label="Country"
          rules={[
            {
              required: true,
              message: "Please select country!",
            },
          ]}
        >
<Select value={selectedCountry} onChange={handleCountryChange} style={{ width: 200, marginRight:'500px' }}>
        <Option value="">Select a country</Option>
        {countries.map((country) => (
          <Option key={country} value={country}>
            {country}
          </Option>
        ))}
      </Select>
        </Form.Item>

        {selectedCountry && (
        <>
          <Form.Item
          name="state"
          label="State"
          rules={[
            {
              required: true,
              message: "Please select state!",
            },
          ]}
        >
          <Select value={selectedState} onChange={handleStateChange} style={{ width: 200 }}>
            <Option value="">Select a state</Option>
            {states[selectedCountry].map((state) => (
              <Option key={state} value={state}>
                {state}
              </Option>
            ))}
          </Select>
        </Form.Item>
        </>
      )}

      {selectedState && (
        <>
        <Form.Item
          name="city"
          label="City"
          rules={[
            {
              required: true,
              message: "Please select city!",
            },
          ]}
        >
        <Select value={selectedCity} onChange={handleCityChange} style={{ width: 200 }}>
          <Option value="">Select a city</Option>
          {cities[selectedState].map((city) => (
            <Option key={city} value={city}>
              {city}
            </Option>
          ))}
        </Select>
        </Form.Item>
          
        </>
      )} 

        <Form.Item label={'D.O.B'} name="dob">
          <DatePicker
            // style={{ width: '100%', height: "36px" }}
            format="DD/MM/YYYY"
            placeholder="Select Date"
            onChange={handleDataChange}
          />
        </Form.Item>

        <Form.Item label="Gender" name="gender">
          <Radio.Group>
            <Radio value="M"> Male </Radio>
            <Radio value="F"> Female </Radio>
            <Radio value="O"> Other </Radio>
          </Radio.Group>
        </Form.Item>
  
        <Form.Item
            name="age"
            label="Age"
            rules={[
                {
                required: true,
                message: "Please input your age!",
                },
                { validator: validateAge }
            ]}
        >
            <InputNumber max={100} />
        </Form.Item>
  
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
  
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>

      </Form>
        </div>
        </>
        }
        { sub && ( <DisplayData formData={formData} /> ) }
        </>
    );
}

export default RegisterForm;
import "../cardTransactions/index.css"
import { useState } from "react";
// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,

} from 'reactstrap'


const CardBrowserState = ({ trackBgColor }) => {
  const [menuOpen, setMenu] = useState(false);
  const statesArr = [
    {
      title: 'Google Chrome',
      value: '54.4%',
    },
    {
      title: 'Mozila Firefox',
      value: '6.1%',
    },
    {
      title: 'Apple Safari',
      value: '14.6%',
    },
    {
      title: 'Internet Explorer',
      value: '4.2%',
    },
    {
      title: 'Opera Mini',
      value: '8.4%',
    }
  ]

  const renderStates = () => {
    return statesArr.map(state => {
      return (
        <div key={state.title} className='browser-states list-group-item'>
          <div className='d-flex'>
            <h6 className='align-self-center mb-0 f-400'>{state.title}</h6>
          </div>
          <div className='d-flex align-items-center'>
            <div className='fw-bold text-body-heading me-1'>{state.value}</div>
          </div>
        </div>
      )
    })
  }

  return (
    <Card className='card-browser-states'>
      <CardHeader className="cardHeaderCustom">
        <div>
          <CardTitle tag='h4'>Browser States</CardTitle>
          <CardText className='font-small-2'>Counter August 2020</CardText>
        </div>
       
      </CardHeader>
      <CardBody>{renderStates()}</CardBody>
    </Card>
  )
}

export default CardBrowserState

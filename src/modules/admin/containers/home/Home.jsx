import React from "react"
import { FormattedMessage } from "react-intl"
import { Card, Row, Col } from "react-bootstrap"
import { Bar, Line, Doughnut } from 'react-chartjs-2';


const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Filles',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'Garçons',
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',

      },
    ],
  },
}
const rand = () => Math.floor(Math.random() * 255)

const genData = () => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Emails',
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: 'RDV',
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Événements',
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
})

const options1 = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}
const data1 = genData()
const data2 = {
  labels: ['Partiel', 'Complet', 'Justifié'],
  datasets: [
    {
      data: [12, 19, 3,],
      backgroundColor: [
        'rgba(240, 52, 52, 1)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(42, 187, 155, 1)',
      ],
      borderWidth: 1,
    },
  ],
}
const Home = () => {
    return (
    <>
      <Row>
        <Col lg="12">
          <Card className={`card card-custom mb-4`}>
            <Card.Header className="border-1">
              <Card.Title className="font-weight-bolder text-uppercase text-dark">
                <FormattedMessage id="STATS.ORDER.INCOME" />
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Line data={data} options={options} />
            </Card.Body>
            <Card.Footer className="p-4 text-center">

            </Card.Footer>
          </Card>
        </Col>
        <Col lg="6">
          <Card className={`card card-custom mb-4`}>
            <Card.Header className="border-1">
              <Card.Title className="font-weight-bolder text-uppercase text-dark">
                <FormattedMessage id="STATS.ORDER.STATUS" />
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Doughnut data={data2} />
            </Card.Body>
            <Card.Footer className="p-4 text-center">

            </Card.Footer>
          </Card>
        </Col>
        <Col lg="6">
          <Card className={`card card-custom mb-4`}>
            <Card.Header className="border-1">
              <Card.Title className="font-weight-bolder text-uppercase text-dark">
                <FormattedMessage id="STATS.ORDER.TIMELINE" />
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Bar
                data={data1}
                options={options1}
              />
            </Card.Body>
            <Card.Footer className="p-4 text-center">

            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Home

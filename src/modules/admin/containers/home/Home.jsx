import React, { useEffect } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Card, Row, Col } from 'react-bootstrap'
import { Bar, Doughnut } from 'react-chartjs-2'
import { FlashMessages } from '../../../../components/partials'
import { clearError, fetchCountByDate, fetchCountByStatus, fetchIncomeByDate } from './store/actions'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { STATUS } from '../../UIHelpers'
import moment from 'moment'

const Home = ({ intl }) => {
  const dispatch = useDispatch()
  const { incomeData, incomeOptions, countByStatusData, countByDateData, countByDateOptions, error } = useSelector(
    (state) => {
      const { error, countByDate, countByStatus, incomeByDate } = state.admin.stats

      const incomeData = {
        labels: incomeByDate.map((val) => moment().month(val.month).format('MMMM')),
        datasets: [
          {
            label: intl.formatMessage({ id: 'STATS.ORDER.INCOME' }),
            data: incomeByDate.map((val) => val.price),
            type: 'bar',
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
          }
        ]
      }
      const incomeOptions = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
      const countByStatusData = {
        labels: countByStatus.map((val) => intl.formatMessage({ id: STATUS[val.status] })),
        datasets: [
          {
            data: countByStatus.map((val) => intl.formatMessage({ id: val.count })),
            backgroundColor: [
              'rgba(0, 23, 76, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(0, 23, 76, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      }

      const countByDateData = {
        labels: countByDate.map((val) => moment().month(val.month).format('MMMM')),
        datasets: [
          {
            label: intl.formatMessage({ id: 'STATS.ORDER.TIMELINE' }),
            type: 'bar',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            data: countByDate.map((val) => intl.formatMessage({ id: val.count }))
          }
        ]
      }

      const countByDateOptions = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
      return ({ incomeData, incomeOptions, countByStatusData, countByDateData, countByDateOptions, error })
    },
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchCountByDate())
    dispatch(fetchIncomeByDate())
    dispatch(fetchCountByStatus())

    // eslint-disable-next-line
  }, [])

  console.log(countByStatusData)

  return (
    <>
      <FlashMessages error={error} onClose={clearError} />
      <Row>
        <Col lg='12'>
          <Card className='card card-custom mb-4'>
            <Card.Header className='border-1'>
              <Card.Title className='font-weight-bolder text-uppercase text-dark'>
                <FormattedMessage id='STATS.ORDER.INCOME' />
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Bar data={incomeData} options={incomeOptions} />
            </Card.Body>
            <Card.Footer className='p-4 text-center' />
          </Card>
        </Col>
        <Col lg='6'>
          <Card className='card card-custom mb-4'>
            <Card.Header className='border-1'>
              <Card.Title className='font-weight-bolder text-uppercase text-dark'>
                <FormattedMessage id='STATS.ORDER.STATUS' />
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Doughnut data={countByStatusData} />
            </Card.Body>
            <Card.Footer className='p-4 text-center' />
          </Card>
        </Col>
        <Col lg='6'>
          <Card className='card card-custom mb-4'>
            <Card.Header className='border-1'>
              <Card.Title className='font-weight-bolder text-uppercase text-dark'>
                <FormattedMessage id='STATS.ORDER.TIMELINE' />
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Bar
                data={countByDateData}
                options={countByDateOptions}
              />
            </Card.Body>
            <Card.Footer className='p-4 text-center' />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default injectIntl(Home)

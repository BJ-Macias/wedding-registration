import { Col, Divider, Image, Row, Tag, Typography } from "antd"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

import cake from '../assets/cake.png';
import cups from '../assets/cups.png';
import smallFrame from '../assets/smallFrame.png';


const ScheduleInfo = () => {
  const screens = useBreakpoint()
  
  return (
    <Row align={'top'} justify={'center'} style={{ marginBottom: 150 }}>
      <Col span={12} xs={24} sm={24} md={22} lg={11} xxl={11} style={{ padding: '0px 10px' }}>
        <Row align={'top'} justify={'space-around'}>
          <Col span={22}>
            <Typography
              className='meow-script-regular responsive-subsection'
              style={{ textAlign: 'start', color: '#9dadfb' }}>Y así será...
            </Typography>
          </Col>
          <Col span={22}>
            <Typography className='comic-relief-bold responsive-subtitle' style={{ color: '#869ed8' }}>02.Mayo.2026</Typography>
          </Col>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
            <Image className='responsive-cake-image-width' src={cake} preview={false} />
          </Col>
        </Row>
      </Col>
      <Col span={12} xs={24} sm={23} md={22} lg={11} xxl={11}>
        <Row align={'top'} justify={'start'}>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center', margin: '0 0 20px 0' }}>
            <Image className='responsive-cups-image-width' src={cups} preview={false} />
          </Col>
          <Col span={24}>
            <Row align={'middle'} justify={'start'}
              className='responsive-padding-schedule'
              style={{
                position: 'relative',
                backgroundImage: `url(${smallFrame})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                boxSizing: 'border-box',
              }}>
              <Col span={9}><Typography className='comic-relief-bold responsive-text'>05:00 PM</Typography></Col>
              <Col span={15}>
                <Tag
                  color="#869ed8"
                  className='comic-relief-bold responsive-text'
                  style={{ height: 30, alignContent: 'center' }}>Ingreso</Tag>
              </Col>
              <Divider size={screens.lg ? 'large' : 'small'} style={{ borderColor: '#869ed8' }} />
              <Col span={9}><Typography className='comic-relief-bold responsive-text'>05:30 PM</Typography>
              </Col>
              <Col span={15}>
                <Tag
                  color="#9dadfb"
                  className='comic-relief-bold responsive-text'
                  style={{ height: 30, alignContent: 'center' }}>Ceremonia Civil</Tag>
              </Col>
              <Divider size={screens.lg ? 'large' : 'small'} style={{ borderColor: '#869ed8' }} />
              <Col span={9}><Typography className='comic-relief-bold responsive-text'>06:00 PM</Typography></Col>
              <Col span={15}>
                <Tag
                  color="#869ed8"
                  className='comic-relief-bold responsive-text'
                  style={{ height: 30, alignContent: 'center' }}>Drinksitos</Tag>
              </Col>
              <Divider size={screens.lg ? 'large' : 'small'} style={{ borderColor: '#869ed8' }} />
              <Col span={9}><Typography className='comic-relief-bold responsive-text'>07:00 PM</Typography></Col>
              <Col span={15}>
                <Tag
                  color="#9dadfb"
                  className='comic-relief-bold responsive-text'
                  style={{ height: 30, alignContent: 'center' }}>Bailongo</Tag>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ScheduleInfo
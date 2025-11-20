import { Col, Image, Row, Space, Typography } from "antd"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

import chalkFrame from '../assets/verticalFrame.png';
import rings from '../assets/rings.png';
import gittTable from '../assets/giftTable.png';
import ringBox from '../assets/ringBox.png';

const CoupleInfo = () => {
  const screens = useBreakpoint()
  
  return (
    <Row align={'middle'} justify={'center'} gutter={20} style={{ marginBottom: 100 }}>
      <Col span={10} xs={23} sm={23} md={22} lg={10} xxl={10}
        className={`responsive-padding-col ${screens.lg ? 'rotate-frame' : ''}`}
        style={{
          position: 'relative',
          backgroundImage: `url(${chalkFrame})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          boxSizing: 'border-box',
        }}>
        <Row align={'middle'} justify={'center'}>
          <Col span={24}>
            <Typography className='comic-relief-bold responsive-frame-section' style={{ textAlign: 'center', color: '#9dadfb' }}>DE LA "A" A LA "Z"</Typography>
          </Col>
          <Col span={24}>
            <Typography className='meow-script-regular response-date-title' style={{ color: '#869ed8' }}>Cel & Jairo</Typography>
          </Col>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <Image src={rings} preview={false} style={{
              width: '90px',
              transform: 'rotate(28deg)'
            }} />
          </Col>
          <Col span={24}>
            <Typography
              className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
              style={{ textAlign: 'center', color: '#869ed8' }}>
              Nos conocimos en nuestro taller de preparatoria, iniciamos nuestro noviazgo 1 mes antes de graduarnos y, ahora, tras 10 años que se han presentado como una montaña rusa, conel amor como guía, hemos decidido enlazar nuestras vidas ante la ley, para toda la vida... Y después de esta...
            </Typography>
          </Col>
        </Row>
      </Col>
      <Col span={7} xs={23} sm={23} md={22} lg={10} xxl={7}>
        <Row align={'middle'} justify={'center'} className={!screens.lg ? 'responsive-padding-schedule' : ''}>
          <Space direction='vertical' size={'large'}>
            <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
              <Image src={gittTable} preview={false} style={{
                width: '160px'
              }} />
            </Col>
            <Col span={24}>
              <Typography className='comic-relief-bold responsive-frame-section' style={{ textAlign: 'center', color: '#9dadfb' }}>How did we meet, anyway?</Typography>
            </Col>
            <Col span={24}>
              <Typography
                className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
                style={{ textAlign: 'center', color: '#869ed8' }}>
                Nos conocimos en un taller de la preparatoria, y empezamos nuestra relación 1 mes antes de salir de la misma... Y dijeron que no durariamos porque nuestras casas se encontraban a solo 44km de distancia... LOL
              </Typography>
            </Col>
          </Space>
        </Row>
      </Col>
      <Col span={7} xs={23} sm={23} md={22} lg={10} xxl={7}>
        <Row align={'middle'} justify={'center'} className={!screens.lg ? 'responsive-padding-schedule' : ''}>
          <Space direction='vertical' size={'large'}>
            <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
              <Image src={ringBox} preview={false} style={{
                width: '140px'
              }} />
            </Col>
            <Col span={24}>
              <Typography className='comic-relief-bold responsive-frame-section' style={{ textAlign: 'center', color: '#9dadfb' }}>How the question was popped?</Typography>
            </Col>
            <Col span={24}>
              <Typography
                className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
                style={{ textAlign: 'center', color: '#869ed8' }}>
                Ella le dijo: “en la playa no” y él dijo “si se lo pido en la playa no lo va a sospechar” and here we are...
              </Typography>
            </Col>
          </Space>
        </Row>
      </Col>
    </Row>
  )
}

export default CoupleInfo
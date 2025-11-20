import { Col, Image, Row, Space, Typography } from "antd"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

import chalkFrame from '../assets/chalkFrame.png'
import verticalFrame from '../assets/verticalFrame.png'
import formalShoes from '../assets/formal.png'
import letter from '../assets/letter.png'
import notes from '../assets/notes.png'

const BasicStuffSection = () => {

  const screens = useBreakpoint()

  return (
    <Row align={'middle'} justify={'center'} gutter={20} style={{ marginBottom: 100 }}>
      <Col span={24} xs={23} sm={23} md={23} lg={16} xxl={16}
        className='responsive-padding-stuff-section'
        style={{
          position: 'relative',
          backgroundImage: `url(${chalkFrame})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxSizing: 'border-box',
          marginBottom: 30
        }}>
        <Typography
          className='meow-script-regular responsive-stuff-section-title'
          style={{ color: '#869ed8' }}>
          The Basic Stuff
        </Typography>
      </Col>
      <Row align={'middle'} justify={'center'} gutter={[40, 40]}>
        <Col xs={24} sm={24} md={16} lg={8} xxl={8}>
          <Row align={'middle'} justify={'center'}
            className='responsive-padding-stuff-1'
            style={{
              position: 'relative',
              backgroundImage: `url(${verticalFrame})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',// Ajusta según el diseño del marco
              boxSizing: 'border-box',
            }}>
            <Space direction='vertical' size={'middle'}>
              <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                <Image className='responsive-shoes-image-width' src={formalShoes} preview={false} />
              </Col>
              <Col span={24}>
                <Typography
                  className='comic-relief-bold responsive-frame-section'
                  style={{ textAlign: 'center', color: '#869ed8' }}>
                  DRESS CODE
                </Typography>
              </Col>
              <Col span={24}>
                <Typography
                  className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
                  style={{ textAlign: 'center', color: '#9dadfb' }}>
                  Formal
                </Typography>
              </Col>
            </Space>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={16} lg={8} xxl={8}>
          <Row align={'middle'} justify={'center'}
            className='responsive-padding-stuff-2'
            style={{
              position: 'relative',
              backgroundImage: `url(${verticalFrame})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxSizing: 'border-box',
            }}>
            <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
              <Image src={letter} preview={false} style={{ width: '160px' }} />
            </Col>
            <Col span={24}>
              <Typography className='comic-relief-bold responsive-frame-section'
                style={{ textAlign: 'center', color: '#869ed8' }} >
                MESA DE REGALOS
              </Typography>
            </Col>
            <Col span={24}>
              <Typography
                className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
                style={{ textAlign: 'center', color: '#9dadfb' }}>
                Tu presencia es lo más importante para
                nosotros, sin embargo, agradecemos
                dentro de lo posible que los obsequios
                sean mediante las mesas de regalo por
                cuestiones de logística y transporte,
                regalos en efectivo o transferencia para
                nuestro Honeymoon Fund también son
                bienvenidos
              </Typography>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={16} lg={8} xxl={8}
          className='responsive-padding-stuff-3'
          style={{
            position: 'relative',
            backgroundImage: `url(${verticalFrame})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            boxSizing: 'border-box',
          }}>
          <Row align={'middle'} justify={'center'}>
            <Space direction='vertical' size={'large'}>
              <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                <Image src={notes} preview={false} style={{ width: '180px' }} />
              </Col>
              <Col span={24}>
                <Typography className='comic-relief-bold responsive-frame-section'
                  style={{ textAlign: 'center', color: '#869ed8' }}>
                  SONG REQUEST
                </Typography>
              </Col>
              <Col span={24}>
                <Typography
                  className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
                  style={{ textAlign: 'center', color: '#9dadfb' }}>
                  Envíanos una canción que te guste, trataremos de que la escuches en el transcurso de la noche
                </Typography>
              </Col>
            </Space>
          </Row>
        </Col>
      </Row>
    </Row>
  )
}

export default BasicStuffSection
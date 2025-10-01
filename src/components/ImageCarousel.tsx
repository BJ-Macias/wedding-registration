import { Carousel, Col, Image, Row, Space } from 'antd'

const ImageCarousel = () => {
  return (
    <>
      <Row align={'middle'} justify={'center'}>
        <Col span={22}>
          <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
            <Image src='https://www.blogdelfotografo.com/wp-content/uploads/2016/09/Lightpainting.jpg'
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
            <Image src='https://www.blogdelfotografo.com/wp-content/uploads/2016/09/Lightpainting.jpg'
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
            <Image src='https://www.blogdelfotografo.com/wp-content/uploads/2016/09/Lightpainting.jpg'
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </Carousel>
        </Col>
      </Row>
    </>
  )
}

export default ImageCarousel
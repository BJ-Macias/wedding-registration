import { AutoComplete, Button, Col, Form, Row, Typography, type AutoCompleteProps, type FormProps } from 'antd'
import type { FieldNamesType } from 'antd/es/cascader';
import { useState } from 'react';

type FieldType = {
  name?: string
}

const RegisterForm = () => {

  const [value, setValue] = useState('')
  const [options, setOptions] = useState<AutoCompleteProps['options']>([
    { value: 'Celeste' },
    { value: 'Jairo' }
  ])

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', value)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const onSelect = (data: string) => {
    console.log('onSelect', data)
  }

  return (
    <>
      <Row align={'middle'} justify={'center'} style={{ marginTop: 25 }}>
        <Col span={22}>
          <Typography className='tangerine-bold responsive-subtitle' style={{ textAlign: 'center' }}>Registro de Asistencia</Typography>
          <Form
            name="assists"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldNamesType>
              layout="vertical"
              rules={[{ required: true, message: 'Confirma tu asistencia!' }]}
            >
              <AutoComplete
                options={options}
                onSelect={onSelect}
                onChange={(e) => setValue(e)}
                placeholder='Ingresa tu nombre' />
            </Form.Item>

            <Form.Item label={null}>
              <Button block type="primary" htmlType="submit">
                Confirmar Asistencia
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default RegisterForm
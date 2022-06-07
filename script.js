//const mqtt = require('mqtt')
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Auth
  const options = {
      clientId: dispositivo.value,

}

const brokerURL = "ws://192.168.45.90:8083/mqtt"
const client  = mqtt.connect(brokerURL, options)
client.on('connect', function () {
  console.log('Connected')
  client.subscribe('parcela', function (err) {
    if (!err) {
    client.publish('parcela')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})

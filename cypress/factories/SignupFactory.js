var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '021911111111',
            address: {
                postalcode: '25956035',
                number: '100',
                details: 'casa A',
                street: 'Rua Otávio Strucchi',
                district: 'São Pedro',
                city_state: 'Teresópolis/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
    
}
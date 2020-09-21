import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text, initializeIcons } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css'

const container = {
    display : 'flex',
    jusifyContent : 'center',
    margin: '10vh 0',
    
}

const icon = {
    fontsize: 20,
    padding: 20,
    float: 'left' as 'left',
    verticalalign: 'middle',
    paddingleft: 20,
    colors: '#0078d4',
    top: 50

}

const styles = {
    cardStyles: {
        root: {
        backgroundColor: 'white',
        padding: 20,
        borderBottom: '10px solid  #0078d4',
        width: '90%',
        maxwidth: '90%',
        marginLeft: '200px'
     }
    },

    header: {
        root: {
            fontsize: 20,
            fontweight: 'bold',

            
        }

    },

    amount: {
        root: {
            fontSize: 20,
            paddingBottom: 20,
            paddingTop: 30,
            color: '#0078d4'
        }
    },

    percentage: {
        root: {
            fontsize: 16,
            fontweight: 'bold',
            color: '#0078d4'
        }
    }
};

const cards = [ 
    {
    title: 'Current balance',
    amount: '$ 21837',
    icon: 'Money',
    percentage: '2.3', 
},

{
    title: 'Current Expenses',
    amount: '$ 10927',
    icon: 'PaymentCard',
    percentage: '0.3' 
},

{
    title: 'Current Income',
    amount: '$ 15093',
    icon: 'Savings',
    percentage: '1.3' 
}
]

const CardSection = () => {
    initializeIcons();
    return(
        <div style = {container}>
           {cards.map((card) => (
               <div className="s-Grid-col ms-sm3 ms-xl3">
                   <Card styles ={styles.cardStyles}>
                       <Card.Section>
                           <Card.Item>
                               <i style = {icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                              <Text styles ={styles.header}>{card.title}</Text>
                           </Card.Item>
                           <Card.Item>
                               <Text styles ={styles.amount}>{card.amount}</Text>
                           </Card.Item>
                           <Card.Item>
                               <Text styles ={styles.percentage}>{card.percentage}%</Text>
                           </Card.Item>
                           </Card.Section>
                           </Card>
                           </div>
           ))}
            </div>
    );

};

export default CardSection;


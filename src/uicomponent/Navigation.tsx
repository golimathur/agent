import React, { useState } from 'react';
import {
    Nav,
    initializeIcons
} from '@fluentui/react';
import {useHistory} from 'react-router-dom';


const links = [{
    links: [{
            name: 'Dashboard',
            url: '/',
            key: 'key1',

            iconProps: {
                iconName: 'viewDashboard',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'
                    }
                }
            }
        },

        {
            name: 'Tasks',
            url: '/Tasks',
            key: 'key2',
            iconProps: {
                iconName: 'TaskManager',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },

        {
            name: 'Deadlines',
            url: '/Deadlines',
            key: 'key3',
            iconProps: {
                iconName: 'Calendar',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },

        {
            name: 'Quotes',
            url: '/Quotes',
            key: 'key4',
            iconProps: {
                iconName: 'TaskManagerMirrored',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },


        {
            name: 'Clients',
            url: '/Clients',
            key: 'key5',
            iconProps: {
                iconName: 'UserGauge',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },

        {
            name: 'Engagement Letter',
            url: '/Engagement Letter',
            key: 'key6',
            iconProps: {
                iconName: 'News',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },

        {
            name: 'Reports',
            url: '/Reports',
            key: 'key7',
            iconProps: {
                iconName: 'CRMReport',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },

    ]
}]

const navigationStyles = {
    root: {
        height: "100vh",
        marginTop: -20,
        width: 200,
        overflowy: "auto",
        marginLeft: -8,
        backgroundColor: "#FFF",
       

    }
}

const Navigation = () => {
    initializeIcons();
    const history =useHistory();
    return (
    <
         Nav groups = {links}
         selectedKey = "key1"
         styles =  {navigationStyles}
    />
   
   
    )
}





export default Navigation;
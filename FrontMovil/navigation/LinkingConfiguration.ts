import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabPerfilDeUsuario: {
            screens: {
              TabPerfilDeUsuarioScreen: 'perfil',
            },
          },
          MensajesDeUsuario: {
            screens: {
              MensajesDeUsuario: 'mensajes',
            },
          },
          Productos: {
            screens: {
              Productos: 'productos',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

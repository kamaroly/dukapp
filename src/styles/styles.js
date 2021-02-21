import { StyleSheet } from 'react-native';

import { padding, fonts, dimensions, colors, allColors } from './base';

export default StyleSheet.create({
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth,
    flex: 1,
    marginBottom: 2,
  },
  header: {
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl,
  },
  formGroup: {
    flexDirection: 'row',
  },
  formLabel: {
    flex: 2,
  },
  button: {
    marginRight: 4,
    marginLeft: 4,
    marginTop: 4,
    padding: 8,
    borderRadius: 4,
  },
  buttonGreen: {
    backgroundColor: '#2f855a',
    borderColor: '#f0fff4',
  },
  buttonYellow: {
    backgroundColor: '#d69e2e',
    borderColor: '#fefcbf',
  },
  buttonRed: {
    backgroundColor: '#9b2c2c',
    borderColor: '#fed7d7',
  },
  buttonText: {
    color: '#fff5f5',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 6,
    fontSize: 16,
    borderRadius: 2,
    height: 48,
    margin: 18,
    marginTop: 5,
    marginBottom: 2,
    padding: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },

  openDialogView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    color: allColors.teal100,
  },
  modalContainer: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'white',
  },
  filterInputStyle: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
  countryModalStyle: {
    flex: 1,
    borderColor: '#b2f5ea',
    borderTopWidth: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalItemContainer: {
    flex: 1,
    paddingLeft: 3,
    flexDirection: 'row',
  },
  modalItemName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalItemDescription: {
    flex: 1,
    fontSize: 12,
    paddingLeft: 6,
    color: '#718096',
  },
  modalItemQuantity: {
    fontSize: 12,
  },

  filterInputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonStyle: {
    padding: 12,
    alignItems: 'center',
  },
  closeTextStyle: {
    padding: 5,
    fontSize: 20,
    color: '#319795',
    fontWeight: 'bold',
  },
  modalCartItemQuantity: {
    color: '#38a169',
  },
  modalCartItemPrice: {
    color: '#d69e2e',
    fontWeight: 'bold',
  },

  itemRow: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6fffa',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3748',
  },

  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a5568',
  },
  buttonCta: {
    margin: 4,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 10,
  },
  teal600: {
    backgroundColor: '#319795',
    borderColor: '#319795',
    color: '#e6fffa',

    fontWeight: 'bold',
  },
  yellow600: {
    backgroundColor: '#d69e2e',
    borderColor: '#d69e2e',
    color: '#fffff0',
    fontWeight: 'bold',
  },
  red600: {
    backgroundColor: '#e53e3e',
    borderColor: '#e53e3e',
    color: '#fff5f5',
  },

  floatingButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 10,
    right: 14,
    backgroundColor: colors.primary,
    borderRadius: 100,
  },

  stickToTheBottom: {
    position: 'absolute',
    bottom: 0,
    left: dimensions.width - 70,
    zIndex: 100,
    marginBottom: 2,
  },

  homeRow: {
    flexDirection: 'row',
    height: dimensions.fullHeight / 6,
    borderRadius: 4,
  },
  homeMenuItem: {
    flex: 1,
    backgroundColor: colors.primary,
    borderColor: allColors.teal100,
    borderRadius: 3,
    borderWidth: 1,
    padding: 8,
    margin: 13,
    marginLeft: 2,
    marginRight: 2,
    fontSize: 22,
  },
  homeMenuItemIcon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  homeMenuItemTitle: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.primaryText,
  },

  /** WELCOME AND AUTH SCREENS */
  containerAuth: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  containerAvoidingView: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },

  textTitle: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
  },

  containerInput: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  cellText: {
    alignItems: 'center',
    fontSize: 16,
  },
  bottomView: {
    flex: 1,
    marginBottom: 50,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  btnChangeNumber: {
    width: 150,
    height: 50,
    radius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textChangeNumber: {
    color: colors.primary,
    alignItems: 'center',
    fontSize: 15,
  },
  btnResendOTP: {
    width: 150,
    height: 50,
    radius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textbtnResendOTP: {
    color: '#22543d',
    alignItems: 'center',
    fontSize: 15,
  },

  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 14,
    alignContent: 'center',
    textAlign: 'center',
  },
  subtitle: {
    paddingTop: 8,
    paddingHorizontal: 20,
    color: '#e6fffa',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 0,
  },
  termsConditions: {
    color: '#fff',
    marginTop: 16,
  },
  bottom: {
    justifyContent: 'flex-end',
    marginTop: 64,
  },

  /** Authentication screen */
  phonInputStyle: {
    marginLeft: 5,
    flex: 1,
    height: 50,
  },
  viewBottom: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btnContinue: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContinue: { color: colors.primaryText, alignItems: 'center' },

  // LINK TYLES
  linkStyle: {
    color: allColors.yellow400,
    textDecorationLine: 'underline',
    padding: 4,
  },
});

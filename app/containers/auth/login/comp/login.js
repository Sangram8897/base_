import { StyleSheet, Keyboard } from 'react-native'
import React, { useCallback, useReducer } from 'react'
import { formReducer } from 'utils/formReducer';
import { Button, Input } from 'components';
import Colors from 'appearance/theme/colors';
import { AppStrings } from 'config/strings';
import { FORM_INPUT_UPDATE } from 'config/constants';

const LoginComp = ({ onSubmit }) => {

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            username: "",
            password: ""
        },
        inputValidities: {
            username: true,
            password: true
        },
        formIsValid: true,
    });

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            })
        }, [dispatchFormState]);

    return (
        <>
            <Input
                required={true}
                email={true}
                id='username'
                label={AppStrings.EMAIL}
                keyboardType={'default'}
                autoFocus={true}
                initialValue={formState.inputValues.username}
                initialValid={formState.inputValidities.username}
                onInputChange={inputChangeHandler}
                onSubmitEditing={Keyboard.dismiss}
                placeholder={AppStrings.ENTER_EMAIL}
                errorText={AppStrings.EMAIL_ERROR}
            //   inputAccessoryViewID={inputAccessoryViewID}
            />

            <Input
                id='password'
                label={AppStrings.PASSWORD}
                keyboardType={'default'}
                initialValue={formState.inputValues.password}
                initialValid={formState.inputValidities.password}
                required={true}
                secureTextEntry={true}
                onInputChange={inputChangeHandler}
                placeholder={AppStrings.ENTER_PASSWORD}
                onSubmitEditing={Keyboard.dismiss}
                minLength={6}
                errorText={AppStrings.PASSWORD_ERROR}
            // inputAccessoryViewID={inputAccessoryViewID}
            />

            <Button
                disabled={!formState.formIsValid}
                backgroundColor={Colors.BLUE_B1}
                textColor={Colors.WHITE}
                label={AppStrings.LOGIN}
                onPress={onSubmit}
            />
        </>
    )
}

export default LoginComp

const styles = StyleSheet.create({})
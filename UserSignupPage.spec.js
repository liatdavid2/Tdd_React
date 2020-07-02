import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UserSignupPage from './UserSignupPage'
import { exportAllDeclaration } from '@babel/types';

beforeEach(cleanup)

describe('UserSignupPage',()=>{
    describe('Layout',()=>{
        it('has header of Sign Up',()=>{
            const {container} = render(<UserSignupPage/>)
            const header = container.querySelector('h1')
            expect(header).toHaveTextContent('Sign Up')
        })

        it('has input for name',()=>{
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const input = queryByPlaceholderText('Your name')
            expect(input).toBeInTheDocument()
        })

        it('has input for password',()=>{
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const input = queryByPlaceholderText('Your password')
            expect(input).toBeInTheDocument()
        })

        
        it('has password type for password input',()=>{
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const input = queryByPlaceholderText('Your password')
            expect(input.type).toBe('password')
        })

        it('has input for Repeat password',()=>{
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const input = queryByPlaceholderText('Repeat Your password')
            expect(input).toBeInTheDocument()
        })

        
        it('has password type for Repeat  password input',()=>{
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const input = queryByPlaceholderText('Repeat Your password')
            expect(input.type).toBe('password')
        })

        it('has submit button',()=>{
            const {container} = render(<UserSignupPage/>)
            const button = container.querySelector('button')
            expect(button).toBeInTheDocument()
        })
    })
    beforeEach(cleanup)
    describe('Interactions',()=>{
        const changeEvent = (content)=>{
            return{
                target:{
                    value:content
                }
            }
        }
        // test that every input field connected to state
        it('sets the name value into state',()=>{
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const input = queryByPlaceholderText('Your name')
            fireEvent.change(input,changeEvent('my-name'))
            expect(input).toHaveValue('my-name')
        })
        it('sets the password value into state',()=>{
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const input = queryByPlaceholderText('Your password')
            fireEvent.change(input,changeEvent('Ppaa12345'))
            expect(input).toHaveValue('Ppaa12345')
        })
        it('sets the password repeat value into state',()=>{
            const {queryByPlaceholderText} = render(<UserSignupPage/>)
            const passwordRepeat = queryByPlaceholderText('Repeat Your password')
            fireEvent.change(passwordRepeat,changeEvent('Ppaa12345'))
            expect(passwordRepeat).toHaveValue('Ppaa12345')
        })
        
    })

})
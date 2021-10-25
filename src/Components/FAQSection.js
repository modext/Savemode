import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layouts'
import lines from '../img/lines.svg'
import Questions from './Questions'
import questions from '../questions'


function FAQSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading"> Frequently <span>asked questions</span></h3>
                <p className= 'c-para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat accusamus odit minus beatae, alias rem omnis, 
                    quod dolores nostrum,
                </p>
                <div className="lines">
                    <img src={lines} alt="" />
                </div>
                <div className="questions-con">
                    {
                        questions.map((q) =>{
                            return <Questions key={q.id} {...q} />
                        })
                    }
                </div>

            </InnerLayout>
            
        </FaqStyled>
    )
}

const FaqStyled = styled.section`
    .c-para{
        width: 60%;
        margin: 0 auto;
        
    }
    .lines{
        position: absolute;
        left: 0;
        top: 600%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }

`

export default FAQSection

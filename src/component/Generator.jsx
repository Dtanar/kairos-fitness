import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/kairos'
import Button from './Button'


function Header({index, titile, description}){
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{titile}</h4>
                
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}


export default function Generator({fate, setFate, muscles, setMuscles, goal, setGoal, updateWorkout}) {

    const [showModal, setShowModal] = useState(false)
    

    function toggleModal(){
        setShowModal(!showModal)
    }

    function updateMuscles(musclesGroup){

        if(muscles.includes(musclesGroup)) {
            setMuscles(muscles.filter(muscle => muscle !== musclesGroup))
            return
        }

        if(muscles.length > 2) {
            return
        }

        if(fate !== 'individual'){
            setMuscles([musclesGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, musclesGroup])
        if(muscles.length  === 2){
            setShowModal(false)
        }
    }
    
  return (
    <>
    <SectionWrapper  header={"Build your workout"} title={['It\'s', 'Big', 'o\'clock']}>
        
        <Header index={"01"} titile={"Select Your Fate"} description={"Choose the exercise routine you want to tackle."}/>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.keys(WORKOUTS).map((type, typeIndex) => {
                return(
                    <button onClick={() => {
                        setMuscles([])
                        setFate(type)
                    }} className={'rounded-lg duration-200  hover:border-white hover:bg-cyan-300 hover:text-zinc-950 py-3 '+ (type === fate ? 'bg-cyan-300 text-zinc-950 border-white border-2':'bg-zinc-950 border px-4 border-cyan-300')} key={typeIndex}>
                        <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
                    </button>
                )
            })}
        </div>

        <Header index={"02"} titile={"Focus on Objectives."} description={"Choose the muscles deemed for destruction."}/>

        <div className="bg-zinc-950 border border-solid rounded-lg border-cyan-300 flex flex-col">
            <button onClick={toggleModal} className='relative flex items-center justify-center p-3'>
                <p className='capitalize'>{muscles.length == 0 ? 'Select Muscle Groups': muscles.join('--')}</p>
                <i className="fa-solid fa-caret-down absolute top-1/2 right-3 -translate-y-1/2"></i>
            </button>


            {showModal && (
                <div className='flex flex-col p-3'>
                    {fate === 'individual' ? WORKOUTS[fate].map((musclesGroup,musclesGroupIndex) =>{
                        return (
                            <button key={musclesGroupIndex} className={'border-opacity-30 border-b border-cyan-300 hover:border-opacity-100 duration-200 ' + (muscles.includes(musclesGroup) ? 'text-cyan-300 border-opacity-100' : '')} onClick={() =>{
                                updateMuscles(musclesGroup)
                            }}>
                                <p className='hover:text-cyan-300 duration-200 uppercase'>{musclesGroup.replaceAll('_',' ')}</p>
                            </button>
                        )
                    }) : Object.keys(WORKOUTS[fate]).map((musclesGroup, musclesGroupIndex) =>{
                        return (
                            <button onClick={(e) =>{
                                console.log(e)
                                updateMuscles(musclesGroup)
                            }} key={musclesGroupIndex} className={'border-opacity-30 border-b border-cyan-300 hover:border-opacity-100 duration-200 ' + (muscles.includes(musclesGroup) ? 'text-cyan-300 border-opacity-100' : '')}>

                                <p className='hover:text-cyan-300 duration-200 uppercase'>{musclesGroup.replaceAll('_',' ')}</p>
                            </button>
                        )
                    })}
                </div>
            )}
        </div>


        <Header index={"03"} titile={"Have an Unstoppable Force."} description={"Choose your ultimate objective."}/>

        <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                return(
                    <button onClick={() => {
                        setGoal(scheme)
                    }} className={'rounded-lg duration-200  hover:border-white hover:bg-cyan-300 hover:text-zinc-950 py-3 '+ (scheme === goal ? 'bg-cyan-300 text-zinc-950 border-white border-2':'bg-zinc-950 border px-4 border-cyan-300')} key={schemeIndex}>
                        <p className='capitalize'>{scheme.replaceAll('_', ' ')}</p>
                    </button>
                )
            })}
        </div>

        <Button func={updateWorkout} text={'Formulate'} />
    </SectionWrapper>

    
    </>
  )
}

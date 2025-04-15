import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useState } from 'react';

const degrees = [
    {
        id: 1,
        degree: "Bachelor of Science in Information Technology",
        institution: "Institution : Saurashtra University",
        //content: "Comprehensive understanding of computer science fundamentals, programming, and software development",
        year: "Passing Year : 2025",
    },
    {
        id: 2,
        degree: "Higher Secondary Education",
        institution: "Institution : Shree Vidhya Aarambh",
        stream: "Stream : Commarce",
        //content: "Awarded Certificate for Drama in National Leval.",
        year: "Passing Year : 2022",
    },
    {
        id: 3,
        degree: "Secondary School Education",
        institution: "Institution : Shree M.K.M Vasoya Patel Vidhya Mandir",
        //content: "Awarded Certificate for Dance in State Level. Collaborated with educational institutions to improve SSC-focused curriculum delivery.",
        year: "Passing Year : 2020",
    },
];

function Education() {
    const [openedId, setOpenedId] = useState(degrees[0].id);

    const toggle = (id) => {
        setOpenedId((prev) => (prev === id ? degrees[0].id : id));
    };

    return (
        <div className="flex flex-col  items-start p-20 max-lg:p-12 max-sm:p-6 h-[100vh] max-sm:items-center max-sm:h-[70vh]">
            <h1 className="text-gray-500 text-xs uppercase pb-4 animate__animated animate__fadeInUp max-sm:p-1">
                Education
            </h1>
            <h2 className="uppercase text-lg font-serif pb-4 animate__animated animate__fadeInUp">
                Education
            </h2>

            <div className="flex flex-col w-[100%] justify-start items-start gap-4 max-sm:justify-center max-sm:items-center">
                {degrees.map((degree) => (
                    <div key={degree.id} className='w-[75vw] max-2xl:w-[100%] flex flex-col p-2 border bg-zinc-200 border-slate-300 active:bg-gray-300 animate__animated animate__zoomIn '>
                        <Box>
                            <Group className='flex Quicksand_Book font-bold'>
                                <div className='flex justify-between items-center w-[100%] text-[15px] uppercase text-sky-700 Quicksand_Book max-sm:text-[12px] '>{degree?.degree}
                                    <Button onClick={() => toggle(degree.id)} className='w-[500px] overflow-visible max-sm:w-[60px]' style={{ overflow: 'visible' }}>{<FontAwesomeIcon icon={faAngleDown} />}</Button>
                                </div>
                            </Group>

                            <Collapse in={openedId === degree?.id}>
                                <div className='flex flex-col'>
                                    <Text className='font-sans'>{degree?.institution}</Text>
                                    <Text className='font-sans'>{degree?.year}</Text>
                                    <Text className='font-sans' >{degree?.stream}</Text>
                                    {/* <Text className='font-sans'>{degree?.content}</Text> */}

                                </div>
                            </Collapse>
                        </Box>
                    </div>
                )
                )
                }
            </div>
        </div>
    );
}

export default Education;

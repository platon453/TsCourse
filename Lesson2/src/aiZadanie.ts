type TypeLessons = 'video' | 'quiz' | 'practice';

interface Ilesson {
    title: string;
    duration: number;
    type: TypeLessons
}

interface ICourse {
    id: number,
    couseName: string,
    lessons: Ilesson[],
    isPublished?: boolean,
}

const calculateCourseDuration = (cource: ICourse):number => {
    let totalMinutes = 0;
    for (let item of lessons) {
        item.Ilesson.duration += totalMinutes
    }

    return totalMinutes;
}




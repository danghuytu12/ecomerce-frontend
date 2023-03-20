import { useRouter } from 'next/router'

export const test1 = {
    home: {
        title: 'Welcome!',
        content: 'Bắt đầu một bài viết nào',
    }
}


export const test = {
    home: {
        title: 'Welcome!',
        content: 'Bắt đầu một bài viết nào',
    }
}



function useTrans() {
    const { locale } = useRouter()

    const trans = locale === 'vi' ? test1 : test

    return trans
}

export default useTrans

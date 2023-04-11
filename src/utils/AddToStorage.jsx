import toast, { Toaster } from 'react-hot-toast';

export const applyBtnHandler = id => {
    let value = [];
    const appliedJobs = localStorage.getItem('appliedJobs')

    if (appliedJobs) {
        const exitst = appliedJobs.includes(id)
        if (exitst) {
            toast.error("Already Applied")
            return
        }
        value = JSON.parse(appliedJobs)
        const newValue = [...value, id]
        localStorage.setItem("appliedJobs", JSON.stringify(newValue));
        toast.success('Applied');
    } else {
        value[0] = id
        localStorage.setItem("appliedJobs", JSON.stringify(value));
        toast.success('Applied');
    }
}
export const getApiFromLink = async () => {
    const url = 'https://reqres.in/api/users?per_page=12';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    const newData = data.data.map((item => item.first_name))
    console.log(newData)
    return newData;
  };
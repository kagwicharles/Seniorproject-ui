export function performDiagnosis(file) {
  const formData = new FormData();
  formData.append('file', file);
  console.log('Sending to server...', formData.get('file'));

  const message = document.getElementById('notification-area');

  fetch('http://localhost:5000/predict', {
    method: 'POST',
    body: formData
  })
    .then((response) => response.json())
    .then((result) => {
      message.style.backgroundColor = '#EBF9F1';
      const diagnosis = result.results;
      const diagnosisMsg = `This is a ${diagnosis} case`;
      message.innerHTML = diagnosisMsg;
      if (diagnosis === 'Normal') {
        message.style.color = '#00AB55';
        console.log('Success:', result);
      } else {
        message.style.color = 'red';
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

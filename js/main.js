'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}

{
  var dataLiteracy = {
    labels: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
    datasets: [{
      data: [3, 3, 3, 2, 1],
      label: 'Front-end',
      backgroundColor: 'rgba(237, 146, 159, 0.2)',
      borderColor: 'rgba(237, 146, 159, 1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(237, 146, 159, 1)',
      pointBorderColor: '#fff'
    }]
  };
  var options = {
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 5,
          ticks: {
            stepSize: 1
          }
        }
      }
  };
  var ctx = document.getElementById("frontSkillSet");
  var myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: dataLiteracy,
      options : options
  });

  // Back-end
  var dataLiteracy = {
      labels: ['PHP', 'C/C++', 'Ruby', 'PostgreSQL', 'MySQL'],
      datasets: [{
        data: [2, 1, 1, 2, 2],
        label: 'Back-end',
        backgroundColor: 'rgba(121, 198, 182, 0.2)',
        borderColor: 'rgba(121, 198, 182, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(121, 198, 182, 1)',
        pointBorderColor: '#fff'
      }]
  };
  var options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: {
          stepSize: 1
        }
      }
    }
  };
  var ctx = document.getElementById("backSkillSet");
  var myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: dataLiteracy,
      options: options
  });
}
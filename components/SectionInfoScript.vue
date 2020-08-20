<template>
  <script>
  function getEnableHolidays(holidays) {
    let ret = [];
    for (let i=0; i < holidays.length; i++) {
      if (dayjs().isSame(holidays[i], 'day')) {
        ret.push(holidays[i]);
      }
      if (dayjs().isBefore(holidays[i], 'day')) {
        ret.push(holidays[i]);
      }
    }
    return ret;
  }
  function formatHoliday(holiday) {
    if (holiday != '') {
      return dayjs(holiday).locale('ja').format('M/D(ddd)');
    } else {
      return '';
    }
  }
  function getHoliday(holidays) {
    let days = getEnableHolidays(holidays);

    let ret = [];
    for (const day of days) {
      ret.push(formatHoliday(day));
    }
    return ret.join('、');
  }

  let holidays = {{ holidays }};
  let enableHolidays = getEnableHolidays(holidays);

  const target_id = enableHolidays.length > 0 ? 'is_holiday' : 'is_not_holiday';
  document.getElementById(target_id).classList.remove('hidden');

  document.getElementById('holiday_days').innerHTML = getHoliday(holidays);
  </script>
</template>

<script>
export default {
  props: {
    holidays: {
      type: Array,
      required: true,
    },
  },
}
</script>

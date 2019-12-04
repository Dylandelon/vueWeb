<template>
  <div class="about">
    <h1>This is a ding page: {{ code }}</h1>
  </div>
</template>
<script>

  export default {
        name: 'ding',
        data() {
            return {
                code: "0",
                
                
            
            }
        },
        mounted() {
          this.code=document.getElementById("code").textContent;
            //获取apiUrl
            // this.dataAccessApiUrl = `${this.$dataAccessApiUrl}`
            // 获取整体统计下的数据
            // this.$axios.get(this.MetricsUrl + `/api/v1/iot-service-metrics/device/register/sum`,{
            
            // this.$axios.get(this.MetricsUrl + `/metrics/statistics/queryAll`,{
			// 		params: {
            //         startTime: this.startTime,
            //         endTime:  this.endTime
			// 		}
					
			// 	}).then(response => {
            //     this.code = response.data.data[0].deviceRegisterSum
                
                
            
            // })

            
        },
        created() {
            // this.getStatisticsDurable();
            // this.getDing();
		},
        methods: {
           
        },
        filters: {
         percentageConversion: function (value) {
           if (!value) return '0'
           return (value*100).toFixed(2).toString()+'%'
  }
}

    }
</script>

import request from '@/utils/request'

export default {
  getHospSetList(current,limit,searchObj){
    return request({
        url: `/admin/hosp/hospitalSet/findPageHospitalSet/${current}/${limit}`,
        method: 'post',
        data: searchObj
    })
  },
  deleteHospSet(id){
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },
  batchRemoveHospSet(idList){
    return request({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  },
  lockHospSet(id,status){
    return request({
      url: `/admin/hosp/hospitalSet/lockHospital/${id}/${status}`,
      method: 'put'
    })
  },
  saveHospSet(hospitalSet){
    return request({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  },
  getHospSetById(id){
    return request({
      url: `/admin/hosp/hospitalSet/getHospitalSet/${id}`,
      method: 'get'
    })
  },
  updateHospitalSet(hospitalSet){
    return request({
      url: `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  }
}
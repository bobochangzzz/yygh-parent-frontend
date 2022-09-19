import request from '@/utils/request'

const api_name = `/admin/cmn/dict`

export default {
    //根据数据id查询子数据列表
    findChildData(id) {
        return request({
            url: `${api_name}/findChildData/${id}`,
            method: 'get'
        })
    },
    //根据dictCode获取下级节点
    findByDictCode(dictCode) {
        return request({
            url: `${api_name}/findByDictCode/${dictCode}`,
            method: 'get'
        })
    }
}
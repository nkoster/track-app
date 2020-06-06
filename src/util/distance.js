export default distance = (lat1, lon1, lat2, lon2) => {
    const earthRadius = 6371e3
    const lat1Radian = lat1 * Math.PI / 180
    const lat2Radian = lat2 * Math.PI / 180
    const deltaLat = (lat2 - lat1) * Math.PI / 180
    const deltaLon = (lon2 - lon1) * Math.PI / 180
    const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
        Math.cos(lat1Radian) * Math.cos(lat2Radian) *
        Math.sin(deltaLon/2) * Math.sin(deltaLon/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return earthRadius * c
}

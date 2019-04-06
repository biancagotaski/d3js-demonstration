const svg = d3.select('svg');

d3.json('sizes.json').then(data => {
    const circle = svg.selectAll('circle')
        .data(data);

    const y = d3.scaleLinear()
        .domain(data.map(item => item.y_axis))
        .range([0, 500]);

    const x = d3.scaleBand()
        .domain(data.map(item => item.x_axis))
        .range([0, 500])
        .paddingInner(0.2)
        .paddingOuter(0.2)

    circle.attr('cx', d => d.x_axis)
        .attr('cy', d => d.y_axis)
        .attr('fill', d => d.fill)
        .attr('r', d => d.radius)
        .style('opacity', 0.4);

    circle.enter()
        .append('circle')
            .attr('cx', d => d.x_axis)
            .attr('cy', d => d.y_axis)
            .attr('fill', d => d.fill)
            .attr('r', d => d.radius);
});
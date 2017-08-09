# Students and former students

## Current PhD Students

## Current Master Students

## Graduated PhD Students

{% for student in site.data.students.graduated_phd %}
<p> 
  {{ student.name }} <br>
  {% for person in student.cosupervisors %}
    <span style="color: #a0a0a0; font-size: 70%">Co-supervised with {{ person }}</span>
  {% endfor %}
</p>
{% endfor %}


## Graduated Master Students

{% for student in site.data.students.graduated_master %}
<p> 
  {{ student.name }} <br>
  {% for person in student.cosupervisors %}
    <span style="color: #a0a0a0; font-size: 70%">Co-supervised with {{ person }}</span>
  {% endfor %}
</p>
{% endfor %}



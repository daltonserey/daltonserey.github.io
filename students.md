# Students and former students

## Current PhD Students

## Current Master Students

## Graduated PhD Students

{% for student in site.data.students.graduated_phd %}
<p> 
  {{ student.name }} <br>
  {% for person in student.cosupervisors %}
    <span style="color: #9f9f9f; font-size: 75%">Co-supervised with {{ person }}</span>
  {% endfor %}
</p>
{% endfor %}


## Graduated Master Students

{% for student in site.data.students.graduated_master %}
<p> 
  {{ student.name }} <br>
  {% for person in student.cosupervisors %}
    <span style="color: #9f9f9f; font-size: 75%">Co-supervised with {{ person }}</span>
  {% endfor %}
</p>
{% endfor %}



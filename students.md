---
---
# Students

### Current PhD Students

{% for student in site.data.students.current_phd %}
<p style="margin-left: 2em; margin-bottom: 0;"> 
  {{ student.name }} {% if student.location  %}
    <span style="color: #b0b0b0">({{ student.location }})</span>
  {% endif %} <br>

  <!--
  {% for person in student.cosupervisors %}
    <span style="color: #c0c0c0; font-size: 75%">Co-supervised with {{ person }}</span>
  {% endfor %}
  -->
</p>
{% endfor %}
<p></p>


### Current Master Students

{% for student in site.data.students.current_master %}
<p style="margin-left: 2em; margin-bottom: 0;"> 
  {{ student.name }} {% if student.location  %}
    <span style="color: #b0b0b0">({{ student.location }})</span>
  {% endif %} <br>

  <!--
  {% for person in student.cosupervisors %}
    <span style="color: #c0c0c0; font-size: 75%">Co-supervised with {{ person }}</span>
  {% endfor %}
  -->
</p>
{% endfor %}
<p></p>


### Graduated PhD Students

{% for student in site.data.students.graduated_phd %}
<p style="margin-left: 2em; margin-bottom: 8px;"> 
  {{ student.name }} {% if student.location  %}
    <span style="color: #b0b0b0">({{ student.location }})</span>
  {% endif %} <br>

  {% for person in student.cosupervisors %}
    <span style="color: #9f9f9f; font-size: 75%"> 
    {% if student.graduated_at %}
        {{ student.graduated_at }} |
    {% endif %}
    Co-supervised with {{ person }}</span>
  {% endfor %}
</p>
{% endfor %}
<p></p>


### Graduated Master Students

{% for student in site.data.students.graduated_master %}
<p style="margin-left: 2em; margin-bottom: 8px;"> 
  {{ student.name }} {% if student.location  %}
    <span style="color: #b0b0b0">({{ student.location }})</span>
  {% endif %}
  {% if student.document  %}
    <span style="color: #b0b0b0"><a href="/teses/{{student.document}}">(dissertação)</a></span>
  {% endif %} <br>

  {% for person in student.cosupervisors %}
    <span style="color: #9f9f9f; font-size: 75%"> 
    {% if student.graduated_at %}
        {{ student.graduated_at }} |
    {% endif %}
    Co-supervised with {{ person }}</span>
  {% endfor %}
</p>
{% endfor %}
<p></p>

from nifgen.base_struct import BaseStruct
from nifgen.formats.nif.imports import name_type_map


class Quaternion(BaseStruct):

	"""
	A quaternion.
	"""

	__name__ = 'Quaternion'


	def __init__(self, context, arg=0, template=None, set_default=True):
		super().__init__(context, arg, template, set_default=False)

		# The w-coordinate.
		self.w = name_type_map['Float'].from_value(1.0)

		# The x-coordinate.
		self.x = name_type_map['Float'].from_value(0.0)

		# The y-coordinate.
		self.y = name_type_map['Float'].from_value(0.0)

		# The z-coordinate.
		self.z = name_type_map['Float'].from_value(0.0)
		if set_default:
			self.set_defaults()

	@classmethod
	def _get_attribute_list(cls):
		yield from super()._get_attribute_list()
		yield 'w', name_type_map['Float'], (0, None), (False, 1.0), (None, None)
		yield 'x', name_type_map['Float'], (0, None), (False, 0.0), (None, None)
		yield 'y', name_type_map['Float'], (0, None), (False, 0.0), (None, None)
		yield 'z', name_type_map['Float'], (0, None), (False, 0.0), (None, None)

	@classmethod
	def _get_filtered_attribute_list(cls, instance, include_abstract=True):
		yield from super()._get_filtered_attribute_list(instance, include_abstract)
		yield 'w', name_type_map['Float'], (0, None), (False, 1.0)
		yield 'x', name_type_map['Float'], (0, None), (False, 0.0)
		yield 'y', name_type_map['Float'], (0, None), (False, 0.0)
		yield 'z', name_type_map['Float'], (0, None), (False, 0.0)
